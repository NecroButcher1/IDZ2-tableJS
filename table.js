class table{
	constructor(){
		this.body=[];
	}
	constructor(row,col){
		this.row=_row;
		this.col=_col;
		this.body=[];
		for(var i=0;i<row;i++){
			body[i]=[];
		}
	}
	set value(i,j,_value){
		this.body[i][j]=_value;
	}
	get value(i,j){
		return this.body[i][j];
	}
}