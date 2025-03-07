# Initialize Method




## Definition
**Namespace:** <a href="N_Avalonia_LinuxFramebuffer_Input">Avalonia.LinuxFramebuffer.Input</a>  
**Assembly:** Avalonia.LinuxFramebuffer (in Avalonia.LinuxFramebuffer.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void Initialize(
	IScreenInfoProvider info,
	Action<RawInputEventArgs> onInput
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub Initialize ( 
	info As IScreenInfoProvider,
	onInput As Action(Of RawInputEventArgs)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Initialize : 
        info : IScreenInfoProvider * 
        onInput : Action<RawInputEventArgs> -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Linux/Avalonia.LinuxFramebuffer/Input/IInputBackend.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_LinuxFramebuffer_Input_IScreenInfoProvider">IScreenInfoProvider</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(<a href="T_Avalonia_Input_Raw_RawInputEventArgs">RawInputEventArgs</a>)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_LinuxFramebuffer_Input_IInputBackend">IInputBackend Interface</a>  
<a href="N_Avalonia_LinuxFramebuffer_Input">Avalonia.LinuxFramebuffer.Input Namespace</a>  
