# FocusManager Property


Gets focus manager of the root.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IFocusManager? FocusManager \{ get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property FocusManager As IFocusManager
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract FocusManager : IFocusManager with get
override FocusManager : IFocusManager with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/TopLevel.cs#L568" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Input_IFocusManager">IFocusManager</a>

#### Implements
<a href="P_Avalonia_Input_IInputRoot_FocusManager">IInputRoot.FocusManager</a>  
Focus manager can be null only if window wasn't initialized yet.

## See Also


#### Reference
<a href="T_Avalonia_Controls_TopLevel">TopLevel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
