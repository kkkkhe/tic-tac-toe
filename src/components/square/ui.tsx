import style from './styles.module.scss'

export const Square = ({value, onClick, id, values}:{value: number,values:any, onClick:any, id:number}) =>{
	return (
		<div className={style.square}>
			<button disabled={value? true: false} onClick={() => onClick(id)}>
				{value}
			</button>
		</div>
	)
}