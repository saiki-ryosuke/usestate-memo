import { useState } from "react"

export const Form = () => {
    const [memoContents, setMemoContents] = useState([])

    const getMemoContents = () => {
        let memoForm = document.getElementById("memo-form")
        setMemoContents([memoForm.value, ...memoContents])
        memoForm.value = '';
    }

    const showMemoContents = () => {
        const historyArea = document.getElementById("history")
        while (historyArea.firstChild){
            historyArea.removeChild(historyArea.firstChild)
        }            

        memoContents.forEach((memo) => {            
            const createdElement = document.createElement("p")
            const content = document.createTextNode(memo)
            createdElement.appendChild(content)
            historyArea.append(createdElement)
        })
    }

    return(
        <>
            <form action="">
                <label htmlFor="memo-form">メモ</label>
                <input type="text" name="memo" id="memo-form" />
                <button type="button" onClick={getMemoContents}>登録</button>
                <button type="button" onClick={showMemoContents}>履歴表示</button>
                <div id="history"></div>                
            </form>
        </>
    )
}