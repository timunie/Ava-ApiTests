# UpdateSource Method


Sends the current binding target value to the binding source property in <a href="T_Avalonia_Data_BindingMode">TwoWay</a> or <a href="T_Avalonia_Data_BindingMode">OneWayToSource</a> bindings.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public virtual void UpdateSource()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overridable Sub UpdateSource
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract UpdateSource : unit -> unit 
override UpdateSource : unit -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/BindingExpressionBase.cs#L33" title="View the source code">View Source</a>

This method does nothing when the Mode of the binding is not <a href="T_Avalonia_Data_BindingMode">TwoWay</a> or <a href="T_Avalonia_Data_BindingMode">OneWayToSource</a>. If the UpdateSourceTrigger value of your binding is set to <a href="T_Avalonia_Data_UpdateSourceTrigger">Explicit</a>, you must call the UpdateSource() method or the changes will not propagate back to the source.

## See Also


#### Reference
<a href="T_Avalonia_Data_BindingExpressionBase">BindingExpressionBase Class</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  
