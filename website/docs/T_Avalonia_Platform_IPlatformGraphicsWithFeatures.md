# IPlatformGraphicsWithFeatures Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[UnstableAttribute]
public interface IPlatformGraphicsWithFeatures : IPlatformGraphics, 
	IOptionalFeatureProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<UnstableAttribute>
Public Interface IPlatformGraphicsWithFeatures
	Inherits IPlatformGraphics, IOptionalFeatureProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<UnstableAttribute>]
type IPlatformGraphicsWithFeatures = 
    interface
        interface IPlatformGraphics
        interface IOptionalFeatureProvider
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a>, <a href="T_Avalonia_Platform_IPlatformGraphics">IPlatformGraphics</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_IPlatformGraphics_UsesSharedContext">UsesSharedContext</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IPlatformGraphics">IPlatformGraphics</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformGraphics_CreateContext">CreateContext()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IPlatformGraphics">IPlatformGraphics</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformGraphics_GetSharedContext">GetSharedContext()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IPlatformGraphics">IPlatformGraphics</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

