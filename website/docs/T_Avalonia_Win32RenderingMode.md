# Win32RenderingMode Enumeration


Represents the rendering mode for platform graphics.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Win32 (in Avalonia.Win32.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum Win32RenderingMode
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration Win32RenderingMode
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type Win32RenderingMode
```
</TabItem>
</Tabs>



## Members
<table>
<tr>
<td>Software</td>
<td>1</td>
<td>Avalonia is rendered into a framebuffer.</td>
</tr>
<tr>
<td>AngleEgl</td>
<td>2</td>
<td>Enables ANGLE EGL for Windows with GPU rendering.</td>
</tr>
<tr>
<td>Wgl</td>
<td>3</td>
<td>Avalonia would try to use native Widows OpenGL with GPU rendering.</td>
</tr>
<tr>
<td>Vulkan</td>
<td>4</td>
<td>Avalonia would try to use native Widows Vulkan with GPU rendering.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
