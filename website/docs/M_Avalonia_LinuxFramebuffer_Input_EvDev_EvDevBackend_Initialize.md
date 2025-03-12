# Initialize Method




## Definition
**Namespace:** <a href="N_Avalonia_LinuxFramebuffer_Input_EvDev">Avalonia.LinuxFramebuffer.Input.EvDev</a>  
**Assembly:** Avalonia.LinuxFramebuffer (in Avalonia.LinuxFramebuffer.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Initialize(
	IScreenInfoProvider info,
	Action<RawInputEventArgs> onInput
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Initialize ( 
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
override Initialize : 
        info : IScreenInfoProvider * 
        onInput : Action<RawInputEventArgs> -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Linux/Avalonia.LinuxFramebuffer/Input/EvDev/EvDevBackend.cs#L51" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_LinuxFramebuffer_Input_IScreenInfoProvider">IScreenInfoProvider</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(RawInputEventArgs)</dt><dd> </dd></dl>

#### Implements
<a href="M_Avalonia_LinuxFramebuffer_Input_IInputBackend_Initialize">IInputBackend.Initialize(IScreenInfoProvider, Action(RawInputEventArgs))</a>  


## See Also


#### Reference
<a href="T_Avalonia_LinuxFramebuffer_Input_EvDev_EvDevBackend">EvDevBackend Class</a>  
<a href="N_Avalonia_LinuxFramebuffer_Input_EvDev">Avalonia.LinuxFramebuffer.Input.EvDev Namespace</a>  

