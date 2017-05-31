import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import escapeTextContentForBrowser from 'escape-html';
import emojify from '../emoji';

class DisplayName extends React.PureComponent {

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
      default:
        break;
    }
    return instanceClassName === '' ? 'display-name' : `display-name ${instanceClassName}`;
  }

  render () {
    const displayName     = this.props.account.get('display_name').length === 0 ? this.props.account.get('username') : this.props.account.get('display_name');
    const displayNameHTML = { __html: emojify(escapeTextContentForBrowser(displayName)) };

    const matched = this.props.account.get('acct').match(/^(.*)@(.*)$/);
    const domain = matched !== null ? matched[matched.length -1] : null;

    return (
      <span className={this.instanceClassName(domain)}>
        <strong className='display-name__html' dangerouslySetInnerHTML={displayNameHTML} /> <span className='display-name__account'>@{this.props.account.get('acct')}</span>
      </span>
    );
  }

}

export default DisplayName;
