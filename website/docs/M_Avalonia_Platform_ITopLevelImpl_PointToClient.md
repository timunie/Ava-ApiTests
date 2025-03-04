import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# PointToClient Method


Converts a point from screen to client coordinates.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Point PointToClient(
	PixelPoint point
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function PointToClient ( 
	point As PixelPoint
) As Point
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract PointToClient : 
        point : PixelPoint -> Point 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Platform/ITopLevelImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  PixelPoint</dt><dd>The point in screen coordinates.</dd></dl>

#### Return Value
Point  
The point in client coordinates.

## See Also


#### Reference
<a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
