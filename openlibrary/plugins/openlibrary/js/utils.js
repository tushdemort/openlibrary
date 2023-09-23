// http://jqueryminute.com/set-focus-to-the-next-input-field-with-jquery/
$.fn.focusNextInputField = function() {
    return this.each(function() {
        var fields = $(this).parents('form').eq(0).add('body').find(':input:visible');
        var index = fields.index(this);
        if (index > -1 && (index + 1) < fields.length) {
            fields.eq(index + 1).focus();
        }
        return false;
    });
};

// closes active popup
// used in templates/covers/saved.html
export function closePopup() {
    parent.jQuery.fn.colorbox.close();
}

// used in templates/admin/imports.html
export function truncate(text, limit) {
    if (text.length > limit) {
        return `${text.substr(0, limit)}...`;
    } else {
        return text;
    }
}

// used in openlibrary/templates/books/edit/excerpts.html
export function cond(predicate, true_value, false_value) {
    if (predicate) {
        return true_value;
    }
    else {
        return false_value;
    }
}

/**
 * Removes children of each given element.
 *
 * @param  {...HTMLElement} elements
 */
export function removeChildren(...elements) {
    for (const elem of elements) {
        if (elem) {
            while (elem.firstChild) {
                elem.removeChild(elem.firstChild)
            }
        }
    }
}
