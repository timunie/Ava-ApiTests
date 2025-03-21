# BitmapBlendingMode Enumeration


Controls the way the bitmaps are drawn together.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum BitmapBlendingMode
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration BitmapBlendingMode
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type BitmapBlendingMode
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Imaging/BitmapBlendingMode.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>Unspecified</td>
<td>0</td>
<td> </td>
</tr>
<tr>
<td>SourceOver</td>
<td>1</td>
<td>Source is placed over the destination.</td>
</tr>
<tr>
<td>Source</td>
<td>2</td>
<td>Only the source will be present.</td>
</tr>
<tr>
<td>Destination</td>
<td>3</td>
<td>Only the destination will be present.</td>
</tr>
<tr>
<td>DestinationOver</td>
<td>4</td>
<td>Destination is placed over the source.</td>
</tr>
<tr>
<td>SourceIn</td>
<td>5</td>
<td>The source that overlaps the destination, replaces the destination.</td>
</tr>
<tr>
<td>DestinationIn</td>
<td>6</td>
<td>Destination which overlaps the source, replaces the source.</td>
</tr>
<tr>
<td>SourceOut</td>
<td>7</td>
<td>Source is placed, where it falls outside of the destination.</td>
</tr>
<tr>
<td>DestinationOut</td>
<td>8</td>
<td>Destination is placed, where it falls outside of the source.</td>
</tr>
<tr>
<td>SourceAtop</td>
<td>9</td>
<td>Source which overlaps the destination, replaces the destination.</td>
</tr>
<tr>
<td>DestinationAtop</td>
<td>10</td>
<td>Destination which overlaps the source replaces the source.</td>
</tr>
<tr>
<td>Xor</td>
<td>11</td>
<td>The non-overlapping regions of source and destination are combined.</td>
</tr>
<tr>
<td>Plus</td>
<td>12</td>
<td>Display the sum of the source image and destination image.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging Namespace</a>  

