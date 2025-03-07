# CreateLineGeometry Method


Creates a line geometry implementation.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IGeometryImpl CreateLineGeometry(
	Point p1,
	Point p2
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function CreateLineGeometry ( 
	p1 As Point,
	p2 As Point
) As IGeometryImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CreateLineGeometry : 
        p1 : Point * 
        p2 : Point -> IGeometryImpl 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IPlatformRenderInterface.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The start of the line.</dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The end of the line.</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>  
A line geometry.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterface">IPlatformRenderInterface Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
