# Stretch Enumeration


Describes how content is resized to fill its allocated space.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum Stretch
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration Stretch
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type Stretch
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Stretch.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>None</td>
<td>0</td>
<td>The content preserves its original size.</td>
</tr>
<tr>
<td>Fill</td>
<td>1</td>
<td>The content is resized to fill the destination dimensions. The aspect ratio is not preserved.</td>
</tr>
<tr>
<td>Uniform</td>
<td>2</td>
<td>The content is resized to fit in the destination dimensions while preserving its native aspect ratio.</td>
</tr>
<tr>
<td>UniformToFill</td>
<td>3</td>
<td>The content is resized to completely fill the destination rectangle while preserving its native aspect ratio. A portion of the content may not be visible if the aspect ratio of the content does not match the aspect ratio of the allocated space.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

