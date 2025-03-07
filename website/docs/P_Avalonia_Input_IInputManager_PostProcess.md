# PostProcess Property


Gets an observable that notifies on each input event received after <a href="P_Avalonia_Input_IInputManager_Process">Process</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IObservable<RawInputEventArgs> PostProcess \{ get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
ReadOnly Property PostProcess As IObservable(Of RawInputEventArgs)
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract PostProcess : IObservable<RawInputEventArgs> with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/IInputManager.cs" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="T_Avalonia_Input_Raw_RawInputEventArgs">RawInputEventArgs</a>)

## See Also


#### Reference
<a href="T_Avalonia_Input_IInputManager">IInputManager Interface</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
