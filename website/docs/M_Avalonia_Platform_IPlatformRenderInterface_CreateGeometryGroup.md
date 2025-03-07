# CreateGeometryGroup Method


Creates a geometry group implementation.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IGeometryImpl CreateGeometryGroup(
	FillRule fillRule,
	IReadOnlyList<IGeometryImpl> children
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function CreateGeometryGroup ( 
	fillRule As FillRule,
	children As IReadOnlyList(Of IGeometryImpl)
) As IGeometryImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CreateGeometryGroup : 
        fillRule : FillRule * 
        children : IReadOnlyList<IGeometryImpl> -> IGeometryImpl 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IPlatformRenderInterface.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_FillRule">FillRule</a></dt><dd>The fill rule.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</dt><dd>The geometries to group.</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>  
A combined geometry.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterface">IPlatformRenderInterface Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
