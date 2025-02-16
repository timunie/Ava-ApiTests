---
title:DeferredTransformationFactoryV2&lt;T&gt; Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# DeferredTransformationFactoryV2&lt;T&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia_Markup_Xaml_XamlIl_Runtime">Avalonia.Markup.Xaml.XamlIl.Runtime</a>  
**Assembly:** Avalonia.Markup.Xaml (in Avalonia.Markup.Xaml.dll) Version: 11.2.4

**C#**
``` C#
public static Func<IServiceProvider, Object> DeferredTransformationFactoryV2<T>(
	Func<IServiceProvider, Object> builder,
	IServiceProvider provider
)

```
**VB**
``` VB
Public Shared Function DeferredTransformationFactoryV2(Of T) ( 
	builder As Func(Of IServiceProvider, Object),
	provider As IServiceProvider
) As Func(Of IServiceProvider, Object)
```
**F#**
``` F#
static member DeferredTransformationFactoryV2 : 
        builder : Func<IServiceProvider, Object> * 
        provider : IServiceProvider -> Func<IServiceProvider, Object> 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.iserviceprovider" target="_blank" rel="noopener noreferrer">IServiceProvider</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.iserviceprovider" target="_blank" rel="noopener noreferrer">IServiceProvider</a></dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.iserviceprovider" target="_blank" rel="noopener noreferrer">IServiceProvider</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)

## See Also


#### Reference
<a href="T_Avalonia_Markup_Xaml_XamlIl_Runtime_XamlIlRuntimeHelpers">XamlIlRuntimeHelpers Class</a>  
<a href="N_Avalonia_Markup_Xaml_XamlIl_Runtime">Avalonia.Markup.Xaml.XamlIl.Runtime Namespace</a>  
