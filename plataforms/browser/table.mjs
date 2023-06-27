import TableComponent from "../../shared/base/tableComponent.mjs"

export default class TableBrowserComponent extends TableComponent {
    render(data) {
        const template = this.formatData(data)
        document.body.insertAdjacentHTML('afterbegin', template)
    }

    formatData(data) {
        const joinList = list => list.join('')

        const [header, ...rows] = data
        const tHeaders = Object.keys(header).map(text => `<th scope="col">${text}</th>`)
        const tBodyValues = rows
                            .map(item => Object.values(item))
                            .map(item => item.map(value => `<td>${value}</td>`))
                            .map(tds => `<tr>${joinList(tds)}</tr>`)
        
        const template = `
        <table class="table">
            <thead>
                <tr>
                    ${joinList(tHeaders)}
                </tr>
            </thead>
            <tbody>
                ${joinList(tBodyValues)}
            </tbody>
        </table>
        `

        return template
    }
}