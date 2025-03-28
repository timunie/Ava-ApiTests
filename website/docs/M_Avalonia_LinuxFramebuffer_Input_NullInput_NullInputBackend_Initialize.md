# Initialize Method




## Definition
**Namespace:** <a href="N_Avalonia_LinuxFramebuffer_Input_NullInput">Avalonia.LinuxFramebuffer.Input.NullInput</a>  
**Assembly:** Avalonia.LinuxFramebuffer (in Avalonia.LinuxFramebuffer.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Initialize(
	IScreenInfoProvider screen,
	Action<RawInputEventArgs> onInput
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Initialize ( 
	screen As IScreenInfoProvider,
	onInput As Action(Of RawInputEventArgs)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Initialize : 
        screen : IScreenInfoProvider * 
        onInput : Action<RawInputEventArgs> -> unit 
override Initialize : 
        screen : IScreenInfoProvider * 
        onInput : Action<RawInputEventArgs> -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Linux/Avalonia.LinuxFramebuffer/Input/NullInput/NullInputBackend.cs#L11" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_LinuxFramebuffer_Input_IScreenInfoProvider">IScreenInfoProvider</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(RawInputEventArgs)</dt><dd> </dd></dl>

#### Implements
<a href="M_Avalonia_LinuxFramebuffer_Input_IInputBackend_Initialize">IInputBackend.Initialize(IScreenInfoProvider, Action(RawInputEventArgs))</a>  


## See Also


#### Reference
<a href="T_Avalonia_LinuxFramebuffer_Input_NullInput_NullInputBackend">NullInputBackend Class</a>  
<a href="N_Avalonia_LinuxFramebuffer_Input_NullInput">Avalonia.LinuxFramebuffer.Input.NullInput Namespace</a>  

