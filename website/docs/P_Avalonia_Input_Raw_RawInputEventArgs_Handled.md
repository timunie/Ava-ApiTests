# Handled Property


Gets or sets a value indicating whether the event was handled.



## Definition
**Namespace:** <a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool Handled \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property Handled As Boolean
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Handled : bool with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/Raw/RawInputEventArgs.cs#L49" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>If an event is not marked handled after processing via the InputManager, then it will be passed on to the underlying OS for handling.

## See Also


#### Reference
<a href="T_Avalonia_Input_Raw_RawInputEventArgs">RawInputEventArgs Class</a>  
<a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw Namespace</a>  
