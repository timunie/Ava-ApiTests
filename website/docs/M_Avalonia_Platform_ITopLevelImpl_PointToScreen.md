import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# PointToScreen Method


Converts a point from client to screen coordinates.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

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



#### Parameters
<dl><dt>  Point</dt><dd>The point in client coordinates.</dd></dl>

#### Return Value
PixelPoint  
The point in screen coordinates.

## See Also


#### Reference
<a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
