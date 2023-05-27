import css from './DevLogger.module.css'

type DevLoggerProps = {
  logData: string | undefined
}

const DevLogger = (props: DevLoggerProps) => {

  if (props.logData === undefined) return null

  const __html = `<pre>${JSON.stringify(props.logData, null, 2)}</pre>`

  return (
    <div
      className={css.container}
      dangerouslySetInnerHTML={{ __html }}
    />
  )
}

export {
  DevLogger,
}
