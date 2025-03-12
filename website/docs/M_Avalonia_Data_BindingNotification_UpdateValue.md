# UpdateValue Method


Updates the value of an object that may be a <a href="T_Avalonia_Data_BindingNotification">BindingNotification</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Object? UpdateValue(
	Object? o,
	Object value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function UpdateValue ( 
	o As Object,
	value As Object
) As Object
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member UpdateValue : 
        o : Object * 
        value : Object -> Object 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/BindingNotification.cs#L183" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The object that may be a binding notification.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The new value.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  
The updated binding notification if *o* is a binding notification; otherwise *value*.If *o* is a <a href="T_Avalonia_Data_BindingNotification">BindingNotification</a> then sets its value to *value*. If *value* is a <a href="T_Avalonia_Data_BindingNotification">BindingNotification</a> then the value will first be extracted.

## See Also


#### Reference
<a href="T_Avalonia_Data_BindingNotification">BindingNotification Class</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  

