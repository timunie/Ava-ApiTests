# PhysicalKey Property



Gets the physical key for the associated event.

This value is independent of the current keyboard layout and usually correspond to the key printed on a standard US English QWERTY keyboard.




## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public PhysicalKey PhysicalKey { get; init; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property PhysicalKey As PhysicalKey
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member PhysicalKey : PhysicalKey with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/KeyEventArgs.cs#L56" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Input_PhysicalKey">PhysicalKey</a>

## Remarks
Use this property if you need to refer to a key given its position on the keyboard (a common usage is moving the player with WASD-like keys).

## See Also


#### Reference
<a href="T_Avalonia_Input_KeyEventArgs">KeyEventArgs Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
<a href="P_Avalonia_Input_KeyEventArgs_Key">Key</a>  
<a href="P_Avalonia_Input_KeyEventArgs_KeySymbol">KeySymbol</a>  

