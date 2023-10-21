export default function paginationFromHydraView(hydraView)
{
    let previous = null
    if (hydraView["hydra:previous"] != null){
        previous = new URLSearchParams(hydraView["hydra:previous"].split('?')[1]).get('page');
    }
    let next = null;
    if (hydraView["hydra:next"] != null){
        next = new URLSearchParams(hydraView["hydra:next"].split('?')[1]).get('page');
    }
    return {
        current: new URLSearchParams(hydraView["@id"].split('?')[1]).get('page'),
        first: new URLSearchParams(hydraView["hydra:first"].split('?')[1]).get('page'),
        previous: previous,
        next: next,
        last: new URLSearchParams(hydraView["hydra:last"].split('?')[1]).get('page'),
    }
}