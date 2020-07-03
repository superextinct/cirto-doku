import { ReactNode, FunctionComponent } from 'react'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return <div className="container lg:w-10/12 xl:w-4/5 mx-auto px-5">{children}</div>
}

export default Container