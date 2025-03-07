# UseAsyncFrontBufferBlit Property


If set to true, FBIO_WAITFORVSYNC ioctl and following memcpy call will run on a dedicated thread saving current one from doing nothing in a blocking call



## Definition
**Namespace:** <a href="N_Avalonia_LinuxFramebuffer_Output">Avalonia.LinuxFramebuffer.Output</a>  
**Assembly:** Avalonia.LinuxFramebuffer (in Avalonia.LinuxFramebuffer.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool? UseAsyncFrontBufferBlit \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property UseAsyncFrontBufferBlit As Boolean?
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member UseAsyncFrontBufferBlit : Nullable<bool> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Linux/Avalonia.LinuxFramebuffer/Output/FbDevOutputOptions.cs#L37" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)

## See Also


#### Reference
<a href="T_Avalonia_LinuxFramebuffer_Output_FbDevOutputOptions">FbDevOutputOptions Class</a>  
<a href="N_Avalonia_LinuxFramebuffer_Output">Avalonia.LinuxFramebuffer.Output Namespace</a>  
