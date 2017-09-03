import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class DisplayName extends React.PureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
  };

  instanceClassName (domain) {
    let instanceClassName = '';
    switch(domain) {
      case 'mastodon.nara.jp':
        instanceClassName = 'shika';
        break;
      case 'mstdn.osaka':
        instanceClassName = 'osaka';
        break;
      case 'mastodon.wakayama.jp':
        instanceClassName = 'wakayama';
        break;
      case 'biwakodon.com':
        instanceClassName = 'biwako';
        break;
      case 'mastodos.com':
        instanceClassName = 'kyoto';
        break;
      case 'mstdn.hyogo.jp':
        instanceClassName = 'hyogo';
        break;
      case 'miestodon.com':
        instanceClassName = 'mie';
        break;
      case 'shigadon.com':
        instanceClassName = 'shiga';
        break;
      case 'gingadon.com':
        instanceClassName = 'ginga';
        break;
      default:
        break;
    }
    return instanceClassName === '' ? 'display-name' : `display-name ${instanceClassName}`;
  }

  render () {
    const displayNameHtml = { __html: this.props.account.get('display_name_html') };

    const matched = this.props.account.get('acct').match(/^(.*)@(.*)$/);
    const domain = matched !== null ? matched[matched.length -1] : null;

    return (
      <span className={this.instanceClassName(domain)}>
        <strong className='display-name__html' dangerouslySetInnerHTML={displayNameHtml} /> <span className='display-name__account'>@{this.props.account.get('acct')}</span>
      </span>
    );
  }

}
