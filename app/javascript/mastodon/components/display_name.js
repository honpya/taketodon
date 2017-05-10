import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class DisplayName extends React.PureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
    others: ImmutablePropTypes.list,
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
      case 'nagoyadon.jp':
        instanceClassName = 'nagoya';
        break;
      case 'mstdn.hyogo.jp':
        instanceClassName = 'hyogo';
        break;
      case 'mstdn.osaka':
        instanceClassName = 'osaka';
        break;
      default:
        instanceClassName = 'unknown';
        break;
    }
    return `display-name ${instanceClassName}`;
  }

  render () {
    const { account, others } = this.props;
    const displayNameHtml = { __html: account.get('display_name_html') };

    let suffix;

    if (others && others.size > 1) {
      suffix = `+${others.size}`;
    } else {
      suffix = <span className='display-name__account'>@{account.get('acct')}</span>;
    }

    const matched = this.props.account.get('acct').match(/^(.*)@(.*)$/);
    const domain = matched !== null ? matched[matched.length -1] : '';

    return (
      <span className={this.instanceClassName(domain)}>
        <bdi><strong className='display-name__html' dangerouslySetInnerHTML={displayNameHtml} /></bdi> {suffix}
      </span>
    );
  }

}
