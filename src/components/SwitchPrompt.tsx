import { Select } from '@thisbeyond/solid-select'
import '@thisbeyond/solid-select/style.css'
import './style.css'

interface IProps {
  onChange: (value: string) => void
}

const prompt = {
  'Custom prompt': '',
  'Write js code': '接下来你需要扮演一个编程专家，我会将需求发给你，你需要告诉我如何用 javascript 实现。',
  'Explain code': '接下来你需要扮演一个编程专家，我会将代码发给你，只需要为我解释这段代码做了什么。',
  'Write unit test use jest': '你现在是一个编程专家，接下来我会将代码发给你，请帮我使用 jest 写一个单元测试，请至少提供五个测试案例，同时要包含到极端的状况，让我能够确定这段程式码的输出是正确的。',
  'Refactor code': '你现在是一个 Clean Code 专家，我会将代码发给你，请用更干净简洁的方式改写，让我的同事们可以更容易维护。另外，也解释为什么你要这样重构，让我能把重构的方式的说明加到 Pull Request 当中。',
  'Code review': '接下来你需要扮演一个编程专家，我会将代码发给你，你需要帮我仔细的 review 代码并给出意见',
  'Json to ts interface': '接下来我会把 json 发给你，你需要帮我生成对应的 typescript 类型',
  'Regex': '你现在是一个 Regex 专家，我会将需求发给你，请帮我写一个 Regex',
  'Translate to english or chinese': '我需要你帮我完成翻译的工作。接下来如果我发给你中文，你需要翻译成英文。如果我发给你英文，你需要翻译成中文',
}

const SwitchPrompt = (props: IProps) => {
  return (
    <div>
      <Select
        initialValue={localStorage.getItem('prompt') || 'Custom prompt'}
        class="custom"
        options={Object.keys(prompt)}
        onChange={(v) => {
          localStorage.setItem('prompt', v)
          props.onChange(prompt[v])
        }
        }
      />
    </div>
  )
}

export default SwitchPrompt
