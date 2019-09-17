import React, { Component } from 'react';
import $ from "jquery";
export class TestJquery extends Component {
    componentDidMount() {
        $(document).ready(function() {
            // $('a.page-scroll').click(function(event) {
            //     var $anchor = $(this);
            //     $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top - 40  }, 1500);
            //     event.preventDefault();
            // });
        
            // ////////////////////////  Highlight the top nav as scrolling occurs. /bootstrap/
            // $('body').scrollspy({ 
            //     target: '#navbar_aside',
            //     offset: 80
            // });
        })
      }
    render() {
        return (
            <div>
                TestJquery
            </div>
        );
    }
}

export default TestJquery;

