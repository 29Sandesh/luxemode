import { Product } from '../types';

export const categories = [
  { name: 'Tops', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxM7FYHsXnfMQLrbrDypqiRgjc9LSQg0WHM88Igzgrp74W_BWSIoyOLFGpQE_IJG-ME4uo8yidtjOnvhRCFVTLLUoFSmpzlmlAG11nYiwhuAFfp_tz3chLjU1TVLK7TnRgZkzxdSQ8_I3G5x8myzqi7TQNOaKZ4hdXQtS63sNNKa0LcQdaHtS8V6WVd_3bVWtDf6jms8wEzgGmPweceNUb75wy7i4Au9JPEH6btlB2UCKf32MciVu-gLbSpQOecFeqefUzuPmWDlbz' },
  { name: 'Bottoms', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjDIeJBNhmU_SNUMZ7Z86_Ob9uXxAyyTwKdz5CkhS4EVg5g1gXMVwsBrYu-QPJsCL5vmpZ-_j-0XN5BBMlk5GaWiZmR9sRG8mWkOFyHXwljI4tloMX4tk2OBOHwmqG7XFyrDc1gTLySGx4dLAqJlyMPF4mYHt6Ruq9yzWRL3ay8QfVlwyJY-BriwgV4SJGCNwMOGveVudDFXvaNhEuRNg4EH1D44fY_WvlYSNxVVnfUdCz1xmpgxBnhVnpelOZxLzhiqm1iVhVT2on' },
  { name: 'Shoes', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuMiKj2a9VL9wxrsomw9uPOWi9n2qiMsgG-gBZIk62Qq8VjMMcLMZZyYyFR3oQCdZ2s3fQelf62j21Jf0dnhVI3cHwYQfkzgHwBKX4s8rUSpPCEN_Q18ZsdirgUYGUPMsqrz4WEV1tqW0NaPbeD07rBYqFn1vT8RZHP99276Yjh0F75EySosECXNR0J14c3HCQwfWGBWmkwqhMbbiVz5KgqIqrX13ceCbJeOlufvNGMNghUn_nT15dd-5wy2GBSwGc5pDOWXr97sIs' },
  { name: 'Bags', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZBYeeP3uxzY16hr3J-ASDVZ3Vo1j87a98yfj3IL0rL4N-MU7TLKPG30YToQnTSGOK99atE3vD-bFI7_1FLZJpB93invk1j4fAK5fCP-ZAlqwKZ7iA8HMN7N9qnF3_uWtpXTQg8CqdKhPirmAkx-RRsoJm1vgM0TkO_n6gmGK2Jfzfv0ZJsU7VoSWqd7WCSLqXggEqEJsRHKABVJvf-TviqmBOyAAd8DRJfDaicR2LrY2RVfjb2g3Ji0-PSstjHiFKIVmfI90fjIWu' },
  { name: 'Jewelry', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpPGa6B_HMcopJUMPsaATrRCpZ37duA2r47MxKyeFUmHFozjfAe9HXAXvdlsHPUL0bW-v0y3VXS8ec326Zv-_PF0u5PRoqd9g95rCdDGtWvpAi_UH7ayx-xhE5jm1zAaSnBF2pPAFYvcl_BHPUH6R-CQG6DYZ8R7MZgRYJrmUtXs2SC0JTJ8hb9GeOxnuks3tvZJOqI9I1mLnVbppbmS2TuBaU2_hrnGK1IXa9W-LGtwGUyZ8WhyDR8BQCoaOHUJzvr7DnMfWh2wvM' },
];

export const trendingProducts: Product[] = [
  {
    id: '1',
    name: 'Pure Linen Maxi Dress',
    price: 89.00,
    isNew: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxcfOCDuKuKrG4hsC1dpgZWjJsy-FFLpCKHIwtlJ8K9CoImoUZDoKIWNHi00yV6yzUnlIh1HXvVeVZgSRQDLwTB70eNZRlio5sw7opWIy8DWAFTfPhIMYixWr_31w9nyT2gNBn4AJbvXFyGS8XJ08FqZr-eH04uQfvwTKQ_cTKas7ccQeVKqlWPbbyUeduAxRx8F_U2266aLyCy3nXkQySIfTmg18yjoO87NE3paaPnjQxrfV94aczgTY6EePMr-PMvhKVjcYW-SW7',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['#eaddcf', '#ffffff', '#222222']
  },
  {
    id: '2',
    name: 'Knitted Rib Crop Top',
    price: 34.00,
    originalPrice: 45.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0zXXBnruhZblZ9YE1uCrNmC1RkKXvRkzQLFIFc-KZg2uOoFI_q1irQt5gOXXzpZMHsdv9UTvdX5uU8CWEiS3C-U34W8gkNHhOD8SfnnhynbX0gtUeqiqB_QoVT6KV0BVm4mIfOXAUVeFYPjhfV6ZUzP0XutSHYE_Ur7VZvuzI5cGTGanZRaIBHjDWIbtq__u7Mtm9Kz7iHQ2j1NTtfxa8v8d3ka3cCCDG97k_UJwZo4cqElyO3SOqKjVypNZhzecDJi1yxi1VVvjv',
    sizes: ['S', 'M', 'L'],
    colors: ['#a8b5a0', '#f4e9d9']
  },
  {
    id: '3',
    name: 'Oversized Denim Jacket',
    price: 120.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0bEAGkd5tgZGHo44R1jFZr7TBYyy1R1NdOgVU9_2EtDRjgWRVtMihsqSrat7VDDPuigHFAQcoiAnfjXT-w50gIX8_zvH7ra3wSpY2jGR2z0LyO_PfkcqKub-2iued3RtbQ5I7x7CdVQdq8UxfaWtAkPOVhE3QVpWxf4v1FukcoXODyZMqwx6HNL7WWNffW03wzKl-9fr2MfaSVKAd2IdMWYL3lNokHLt9LjiHmYsYaOSvQURsw0et8LFtn5ojz5g6qxYPURGYYMHe',
    sizes: ['M', 'L', 'XL'],
    colors: ['#4d698e']
  },
  {
    id: '4',
    name: 'Hand-painted Silk Scarf',
    price: 48.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1L9f1RCRPcxPYYBH0wMSfzi3u2H4x7S-OxWMOKy9-qeSjYZVq5T7SRqmyFODJSF59joCySTAYEmoQiWHhaqGl5duY7ipMnp4zy1QkIHFUCqa57w2vYC33CWqa6kebUHiWhD-ZtWSTUiVqJjMQbYV5XkT6Akd79tLDzpqrcQ9gw4KS9LzWGyalFryKJZ22jOn29vOdTFHcytRLK8D5z8NHgTf6uz8LOGQBlUNs241B4F6WeRGcGl_KxhqY2DEqG_BFkNKiC0lZ3T5E',
    sizes: ['One Size'],
    colors: ['#d65a6c', '#e8b4b8']
  }
];

export const summerDresses: Product[] = [
  {
    id: '101',
    name: 'Linen Maxi Dress',
    price: 89.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAs_WtfMnXMQc7k2DOyhi8OPrcHF-_nqKNI11g4u6jZthSbxPqNtgK8vOVEu2qs2jukGhE11FoO_hyMoXLz64GiQK8TKwFbvkgr2L0yVVxrLKgQDot0wNXQYlCN8Ivnm5xeWO6EChHxy9ssFUHl6TrG6ZOMcSE1D3rML-6PSZDnszslSu3v3QApqTJu7Gg26OXtqqlXXTNKGR3ZS7ZfiMYbFG86UIaTaTjGwasPfrBaRLH3Ss0d1ACe8pRcm_Lci6Oq-tvT6N1I5pIX',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['#eaddcf', '#8b4513']
  },
  {
    id: '102',
    name: 'Floral Wrap Mini',
    price: 65.00,
    isNew: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLN_KuWjzPWMTIyubmwNzltGMkjCwumBcfCekIURfhibFJVuMG3omtlW83HKXeZ8nf0ow5cRMf-twRyYs_SNejpeFanmhJFgDOWnbb8OGTWrswY7i7vmEzl4oUq5OkuJ4G8Xgf-QdAHTkFl2w6r9xEOmF9RBmNQ5qnKPb5XR3NM6NnP-nKG091DBFES3UjDnbAiCeY7Qna0MdsRJ04Kz0VHHzjuD7DCiOthwGBIZjH4SQZFBTNzwcS_6mzbj5wY57RAcu4XDHYDtla',
    sizes: ['S', 'M', 'L'],
    colors: ['#ffb7b2', '#ffffff']
  },
  {
    id: '103',
    name: 'Silk Slip Dress',
    price: 120.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgg11Atop-TagFqWkp87TMWj3rcXh9SMSO1G850w-PukzcmwAOjM8B0SlSXKV1f4M397niKLYf_lsoHFFi0XcH27rJABFi2ODnmt6AkzKYk4RcUDWCCdW_kaEeH3p67yCt69_IG7KCtWalaRUzy3Q_k-7W0BxdEvj7QsdITv2gT5pGVIVF_5ujMQxwKyzKAMV38TO_KW470d-Xy47c5EF_xwVg3qK87_AMByjd1DUigpWYCyHgHz-ZZ0L_kvA1URqG-EDsmc8rYLY3',
    sizes: ['XS', 'S', 'M'],
    colors: ['#ffd700', '#000000']
  },
  {
    id: '104',
    name: 'Boho Sun Dress',
    price: 78.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAen_ERxerP6-NCr2w_TrC8Zf3xf5kqmft-bDp-oVOodFzT3b3wJJIh70EHa_rYB6GqlTH8jKjM9iSiqhbUBOMAGfgC_ponD_Zb8gkBHNYoDCWTJ-kwcrdMgf2Wps6O8wO1ZjRATkexuAid9-8xw2zxyAuJWEXwdLvZIiZWBDrMiHOh5oLVd_mnUXMMRTv5Ol5zpPJEenvHzqwl86cPV-2XDLFFUJVC_yiTZHwu0HOBLESFZsXlzLlx-U6wL0XKHZL2KlvvRZN6gq-',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#ffffff', '#ff69b4']
  },
  {
    id: '105',
    name: 'Chiffon Midi',
    price: 95.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR1D0mtaNV-O_3Bd597uEuttexvRCaMAAkdwV_JL0FxEAP6dvJbwei6ydRMQEPKpqJcVKfPv93IeGyuVKRBei4lucs9-0mhEl4lVoeHfZEcK1IcMVnbqmKq_Anc2CPZtFYscdIwThlcPTo5VngtCL1C7r2bvDesm9kkpFpU8VLRKgU9OLaL5TLdkRxaQ0p8D5OSMpN1u-JILbu2RDFO_bcgGsC1sI19MC4yw86eKXhv2teVvYXJk40-s0wwQUsuh5f3qYfhYLGY4QQ',
    sizes: ['M', 'L'],
    colors: ['#87ceeb']
  },
  {
    id: '106',
    name: 'Navy Cocktail',
    price: 110.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBFWWlQj2pLti3ju17ecz37o-VrIozRqBiXRZ0OuFjWPlg7s5AaqCnHEYjDa7TvqsFObPSEB1ymy_L41sl2cmp0aR7WPen3DwRMXd654jpfD-t2lohRMlqolVOEpM1fa8hK_lA4ooA2fIXbzIn-_LcsdH-1bELMcpnKnKtdERu1yHC-jjIxBtFlddDSDmnROlqerdWfn_2VvM1XBFewd3syny19PDPbTFx0yNBBrqiMCGYkomCQp8i53HxOcfiRf-8AOXgfyCxVhFb',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['#000080']
  }
];

export const allProducts = [...trendingProducts, ...summerDresses];
