---
title:IPlatformGraphicsWithFeatures Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# IPlatformGraphicsWithFeatures Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
[UnstableAttribute]
public interface IPlatformGraphicsWithFeatures : IPlatformGraphics, 
	IOptionalFeatureProvider
```
**VB**
``` VB
<UnstableAttribute>
Public Interface IPlatformGraphicsWithFeatures
	Inherits IPlatformGraphics, IOptionalFeatureProvider
```
**F#**
``` F#
[<UnstableAttribute>]
type IPlatformGraphicsWithFeatures = 
    interface
        interface IPlatformGraphics
        interface IOptionalFeatureProvider
    end
```

<table><tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a>, <a href="T_Avalonia_Platform_IPlatformGraphics">IPlatformGraphics</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_IPlatformGraphics_UsesSharedContext">UsesSharedContext</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IPlatformGraphics">IPlatformGraphics</a>)</td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformGraphics_CreateContext">CreateContext()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IPlatformGraphics">IPlatformGraphics</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformGraphics_GetSharedContext">GetSharedContext()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IPlatformGraphics">IPlatformGraphics</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IOptionalFeatureProvider_TryGetFeature">TryGetFeature(Type)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a>)</td></tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_OptionalFeatureProviderExtensions_TryGetFeature__1_1">TryGetFeature(T)()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Platform_OptionalFeatureProviderExtensions">OptionalFeatureProviderExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_OptionalFeatureProviderExtensions_TryGetFeature__1">TryGetFeature(T)(T)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Platform_OptionalFeatureProviderExtensions">OptionalFeatureProviderExtensions</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
