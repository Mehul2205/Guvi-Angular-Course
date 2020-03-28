import {Component, Input, Output,EventEmitter} from '@angular/core';

@Component({
    selector: "my-grid",
    templateUrl: './CustomerApp.Grid.html'
})

export class GridComponent{

    // For column Names
    gridColumns: Array<Object> = new Array<Object>();

    // For Grid Data
    gridData: Array<Object> = new Array<Object>();

    @Input('grid-Columns')
    set setGridColumns(_gridColumns:Array<Object>){
        this.gridColumns = _gridColumns;
    }

    @Input('grid-Data')
    set setGridData(_gridData: Array<Object>){
        this.gridData = _gridData
    }

    @Output('grid-selected')
    eventemitter: EventEmitter<Object> = new EventEmitter<Object>();
    SelectGrid(_selected:Object){
        // Emit out a event will send a signal to the UI under which this component is running
        this.eventemitter.emit(_selected);

    }
}