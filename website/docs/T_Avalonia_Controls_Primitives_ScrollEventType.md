# ScrollEventType Enumeration


Specifies the type of Avalonia.Controls.Primitives.ScrollBar.Scroll event that occurred.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum ScrollEventType
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration ScrollEventType
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ScrollEventType
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/ScrollEventType.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>SmallDecrement</td>
<td>0</td>
<td>Specifies that the Avalonia.Controls.Primitives.Thumb moved a specified distance, as determined by the value of Avalonia.Controls.Primitives.RangeBase.SmallChange. The Avalonia.Controls.Primitives.Thumb moved to the left for a horizontal Avalonia.Controls.Primitives.ScrollBar or upward for a vertical Avalonia.Controls.Primitives.ScrollBar.</td>
</tr>
<tr>
<td>SmallIncrement</td>
<td>1</td>
<td>Specifies that the Avalonia.Controls.Primitives.Thumb moved a specified distance, as determined by the value of Avalonia.Controls.Primitives.RangeBase.SmallChange. The Avalonia.Controls.Primitives.Thumb moved to the right for a horizontal Avalonia.Controls.Primitives.ScrollBar or downward for a vertical Avalonia.Controls.Primitives.ScrollBar.</td>
</tr>
<tr>
<td>LargeDecrement</td>
<td>2</td>
<td>Specifies that the Avalonia.Controls.Primitives.Thumb moved a specified distance, as determined by the value of Avalonia.Controls.Primitives.RangeBase.LargeChange. The Avalonia.Controls.Primitives.Thumb moved to the left for a horizontal Avalonia.Controls.Primitives.ScrollBar or upward for a vertical Avalonia.Controls.Primitives.ScrollBar.</td>
</tr>
<tr>
<td>LargeIncrement</td>
<td>3</td>
<td>Specifies that the Avalonia.Controls.Primitives.Thumb moved a specified distance, as determined by the value of Avalonia.Controls.Primitives.RangeBase.LargeChange. The Avalonia.Controls.Primitives.Thumb moved to the right for a horizontal Avalonia.Controls.Primitives.ScrollBar or downward for a vertical Avalonia.Controls.Primitives.ScrollBar.</td>
</tr>
<tr>
<td>ThumbTrack</td>
<td>4</td>
<td>The Avalonia.Controls.Primitives.Thumb was dragged and caused a Avalonia.UIElement.MouseMove event. A Avalonia.Controls.Primitives.ScrollBar.Scroll event of this Avalonia.Controls.Primitives.ScrollEventType may occur more than one time when the Avalonia.Controls.Primitives.Thumb is dragged in the Avalonia.Controls.Primitives.ScrollBar.</td>
</tr>
<tr>
<td>EndScroll</td>
<td>5</td>
<td>Specifies that the Avalonia.Controls.Primitives.Thumb was dragged to a new position and is now no longer being dragged by the user.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

