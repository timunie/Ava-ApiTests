# RenderDirectlyToMappedMemory Property


If set to true, double-buffering will be disabled and scene will be composed directly into mmap-ed memory region While this mode saves a blit, you need to check if it won't cause rendering artifacts your particular device.



## Definition
**Namespace:** <a href="N_Avalonia_LinuxFramebuffer_Output">Avalonia.LinuxFramebuffer.Output</a>  
**Assembly:** Avalonia.LinuxFramebuffer (in Avalonia.LinuxFramebuffer.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool RenderDirectlyToMappedMemory { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property RenderDirectlyToMappedMemory As Boolean
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RenderDirectlyToMappedMemory : bool with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Linux/Avalonia.LinuxFramebuffer/Output/FbDevOutputOptions.cs#L26" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_LinuxFramebuffer_Output_FbDevOutputOptions">FbDevOutputOptions Class</a>  
<a href="N_Avalonia_LinuxFramebuffer_Output">Avalonia.LinuxFramebuffer.Output Namespace</a>  

