# ScreenOrientation Enumeration


Describes the orientation of a screen.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum ScreenOrientation
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration ScreenOrientation
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ScreenOrientation
```
</TabItem>
</Tabs>



## Members
<table>
<tr>
<td>None</td>
<td>0</td>
<td>No screen orientation is specified.</td>
</tr>
<tr>
<td>Landscape</td>
<td>1</td>
<td>Specifies that the monitor is oriented in landscape mode where the width of the screen viewing area is greater than the height.</td>
</tr>
<tr>
<td>Portrait</td>
<td>2</td>
<td>Specifies that the monitor rotated 90 degrees in the clockwise direction to orient the screen in portrait mode where the height of the screen viewing area is greater than the width.</td>
</tr>
<tr>
<td>LandscapeFlipped</td>
<td>4</td>
<td>Specifies that the monitor rotated another 90 degrees in the clockwise direction (to equal 180 degrees) to orient the screen in landscape mode where the width of the screen viewing area is greater than the height. This landscape mode is flipped 180 degrees from the Landscape mode.</td>
</tr>
<tr>
<td>PortraitFlipped</td>
<td>8</td>
<td>Specifies that the monitor rotated another 90 degrees in the clockwise direction (to equal 270 degrees) to orient the screen in portrait mode where the height of the screen viewing area is greater than the width. This portrait mode is flipped 180 degrees from the Portrait mode.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
