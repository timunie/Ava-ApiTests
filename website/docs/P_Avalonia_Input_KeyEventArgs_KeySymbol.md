# KeySymbol Property



Gets the unicode symbol of the key, or null if none is applicable.

For example, when pressing the key located at the `Z` position on standard US English QWERTY keyboard, this property returns:  
 - `z` for an English (QWERTY) layout  
 - `w` for a French (AZERTY) layout  
 - `y` for a German (QWERTZ) layout  
 - `я` for a Russian (JCUKEN) layout




## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public string? KeySymbol { get; init; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property KeySymbol As String
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member KeySymbol : string with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/KeyEventArgs.cs#L73" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>

## See Also


#### Reference
<a href="T_Avalonia_Input_KeyEventArgs">KeyEventArgs Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

