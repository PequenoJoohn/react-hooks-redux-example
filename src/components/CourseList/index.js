import { useSelector, useDispatch } from 'react-redux';

// Função para consumir a action
function addCourseAction(title) {
    return { type: 'ADD_COURSE', title }
}
// Função principal
function CourseList() {
    const qty = 100;

    // const courses = useSelector(state => state.data);

    /**
     * COM MAIS PARAMETROS
     * o último parametro monitora a modificação de um novo valor,
     * assim que alterado ele carrega, sem precisar ficar realizando novas atualizações.
     * 
     */
    const courses = useSelector(
        state => state.data.slice(0, qty),
        [qty]
    );

    const dispatch = useDispatch();

    function addCourse() {
        // dispatch({ type: 'ADD_COURSE', title: 'GRAPHQL' })
        dispatch(addCourseAction('- Novo Curso -'));
    }

    return (
        <>
            <ul>
                {courses.map(course => <li key={course}>{course}</li>)}
            </ul>
            <button type="button" onClick={addCourse}>
                Adicionar Curso
            </button>
        </>
    )
}

export default CourseList;
