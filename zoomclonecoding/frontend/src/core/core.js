import { Component, ComponentReturnType } from "../types/component";
import EventManager from "./eventManager";
import { VirtualDom } from "./virtualDom";

export const Core = (() => {
    // protected -> _변수
    // private -> #변수
    //let _state: any =[];
    let _state = {};
    let _render = Function;
    let _root = ComponentReturnType;
    let _page = ComponentReturnType;
    let idx = 0;

    const render = (component, $parent) => {
        if (!_root) _root = component();
        if( !_render) {
            _render = () => {
                VirtualDom.render(_root.template(), $parent);
                EventManager.regist();
            };
        };
        _render();
    };

    const useRouter = (initPage)=> {
        _page = initPage;
        const getPage = () => _page;
        const setPage = (newPage) => {
          _page = newPage;
          if (_render) _render();
        };
        return { getPage, setPage };
      };
      const useState = (initState)=> {
        const i = idx++;
        _state[i] = initState;
        const getState = () => _state[i];
        const setState = (newState) => {
          _state[i] = newState;
          if (_render) _render();
        };
        return { getState, setState };
      };

    const clear = () => {
        _state = _state.slice(0, 1);
        idx = 0;
    };
    return { useState, render, clear, useRouter };
})();