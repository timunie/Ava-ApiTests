# StretchDirection Enumeration


Describes the type of scaling that can be used when scaling content.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum StretchDirection
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration StretchDirection
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type StretchDirection
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/StretchDirection.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>UpOnly</td>
<td>0</td>
<td>Only scales the content upwards when the content is smaller than the available space. If the content is larger, no scaling downwards is done.</td>
</tr>
<tr>
<td>DownOnly</td>
<td>1</td>
<td>Only scales the content downwards when the content is larger than the available space. If the content is smaller, no scaling upwards is done.</td>
</tr>
<tr>
<td>Both</td>
<td>2</td>
<td>Always stretches to fit the available space according to the stretch mode.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

