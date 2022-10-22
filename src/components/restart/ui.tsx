import style from './styles.module.scss'

export const Restart = ({setValue, values}:any) => {
	return (
	<button className={style.restart} onClick={() => setValue(values.map((item:any) => item = null))}>
		Restart
	</button>
	)
}