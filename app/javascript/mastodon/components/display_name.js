import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class DisplayName extends React.PureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
  };

  instanceClassName (domain) {
    if (domain === '') {
        return 'display-name';
    }

    let instanceClassName = '';
    switch(domain) {
      case 'biwakodon.com':
        instanceClassName = 'biwako';
        break;
      case 'gingadon.com':
        instanceClassName = 'ginga';
        break;
      case 'hiroshimastodon.red':
        instanceClassName = 'hiroshima';
        break;
      case 'mastodon.nara.jp':
        instanceClassName = 'shika';
        break;
      case 'mastodon.wakayama.jp':
        instanceClassName = 'wakayama';
        break;
      case 'mastodos.com':
        instanceClassName = 'kyoto';
        break;
      case 'miestodon.com':
        instanceClassName = 'mie';
        break;
      case 'mstdn.hyogo.jp':
        instanceClassName = 'hyogo';
        break;
      case 'mstdn.osaka':
        instanceClassName = 'osaka';
        break;
      case 'shigadon.com':
        instanceClassName = 'shiga';
        break;
      default:
        instanceClassName = 'unknown';
        break;
    }
    return `display-name ${instanceClassName}`;
  }

  render () {
    const displayNameHtml = { __html: this.props.account.get('display_name_html') };

    const matched = this.props.account.get('acct').match(/^(.*)@(.*)$/);
    const domain = matched !== null ? matched[matched.length -1] : '';

    return (
      <span className={this.instanceClassName(domain)}>
        <bdi><strong className='display-name__html' dangerouslySetInnerHTML={displayNameHtml} /></bdi> <span className='display-name__account'>@{this.props.account.get('acct')}</span>
      </span>
    );
  }

}
