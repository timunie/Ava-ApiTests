# PointToScreen Method


Converts a point from client to screen coordinates.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
PixelPoint PointToScreen(
	Point point
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function PointToScreen ( 
	point As Point
) As PixelPoint
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract PointToScreen : 
        point : Point -> PixelPoint 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/ITopLevelImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The point in client coordinates.</dd></dl>

#### Return Value
<a href="T_Avalonia_PixelPoint">PixelPoint</a>  
The point in screen coordinates.

## See Also


#### Reference
<a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
