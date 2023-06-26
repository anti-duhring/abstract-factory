import TableComponent from "../../shared/base/tableComponent.mjs"

export default class TableConsoleComponent extends TableComponent {
    render(data) {
        console.log('Render called', data)
    }
}