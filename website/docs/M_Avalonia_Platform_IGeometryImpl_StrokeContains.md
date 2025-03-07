# StrokeContains Method


Indicates whether the geometry's stroke contains the specified point.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
bool StrokeContains(
	IPen? pen,
	Point point
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function StrokeContains ( 
	pen As IPen,
	point As Point
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract StrokeContains : 
        pen : IPen * 
        point : Point -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IGeometryImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IPen">IPen</a></dt><dd>The stroke to use.</dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The point.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
`true` if the geometry contains the point; otherwise, `false`.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
