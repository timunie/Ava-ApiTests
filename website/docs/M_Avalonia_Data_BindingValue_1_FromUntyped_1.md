# FromUntyped(Object) Method


Creates a <a href="T_Avalonia_Data_BindingValue_1">BindingValue(T)</a> from an object, handling the special values <a href="F_Avalonia_AvaloniaProperty_UnsetValue">UnsetValue</a>, <a href="F_Avalonia_Data_BindingOperations_DoNothing">DoNothing</a> and <a href="T_Avalonia_Data_BindingNotification">BindingNotification</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static BindingValue<T> FromUntyped(
	Object? value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function FromUntyped ( 
	value As Object
) As BindingValue(Of T)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member FromUntyped : 
        value : Object -> BindingValue<'T> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/BindingValue.cs#L243" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The untyped value.</dd></dl>

#### Return Value
<a href="T_Avalonia_Data_BindingValue_1">BindingValue</a>(<a href="T_Avalonia_Data_BindingValue_1">T</a>)  
The typed binding value.

## See Also


#### Reference
<a href="T_Avalonia_Data_BindingValue_1">BindingValue(T) Structure</a>  
<a href="Overload_Avalonia_Data_BindingValue_1_FromUntyped">FromUntyped Overload</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  

