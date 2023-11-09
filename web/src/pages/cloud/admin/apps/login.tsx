import { useTranslate } from '@refinedev/core'
import { FormModal } from '@duxweb/dux-refine'
import { Form, Input, Link } from 'tdesign-react/esm'

const Page = (props: Record<string, any>) => {
  const translate = useTranslate()

  return (
    <FormModal id={props?.id}>
      <Form.FormItem label={translate('cloud.apps.fields.username')} name='username'>
        <Input />
      </Form.FormItem>
      <Form.FormItem label={translate('cloud.apps.fields.password')} name='password'>
        <Input type='password' />
      </Form.FormItem>
      <Form.FormItem>
        没有账号？请先
        <Link href='https://www.dux.cn' theme='primary' target='_black'>
          注册应用平台
        </Link>
      </Form.FormItem>
    </FormModal>
  )
}

export default Page
