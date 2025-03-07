# AlphaFormat Enumeration


Describes how to interpret the alpha component of a pixel.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum AlphaFormat
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration AlphaFormat
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type AlphaFormat
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/AlphaFormat.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>Premul</td>
<td>0</td>
<td>All pixels have their alpha premultiplied in their color components.</td>
</tr>
<tr>
<td>Unpremul</td>
<td>1</td>
<td>All pixels have their color components stored without any regard to the alpha. e.g. this is the default configuration for PNG images.</td>
</tr>
<tr>
<td>Opaque</td>
<td>2</td>
<td>All pixels are stored as opaque.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
