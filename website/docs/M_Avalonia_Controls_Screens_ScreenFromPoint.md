import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ScreenFromPoint Method


Retrieves a Screen for the display that contains the specified point.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Screen? ScreenFromPoint(
	PixelPoint point
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ScreenFromPoint ( 
	point As PixelPoint
) As Screen
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ScreenFromPoint : 
        point : PixelPoint -> Screen 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  PixelPoint</dt><dd>A Point that specifies the location for which to retrieve a Screen.</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_Screen">Screen</a>  
The <a href="T_Avalonia_Platform_Screen">Screen</a>.On mobile, this method always returns null.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Screens">Screens Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
