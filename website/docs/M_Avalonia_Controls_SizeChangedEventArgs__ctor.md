# SizeChangedEventArgs(RoutedEvent, Object, Size, Size) Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_SizeChangedEventArgs">SizeChangedEventArgs</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public SizeChangedEventArgs(
	RoutedEvent? routedEvent,
	Object? source,
	Size previousSize,
	Size newSize
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	routedEvent As RoutedEvent,
	source As Object,
	previousSize As Size,
	newSize As Size
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        routedEvent : RoutedEvent * 
        source : Object * 
        previousSize : Size * 
        newSize : Size -> SizeChangedEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/SizeChangedEventArgs.cs#L43" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a></dt><dd>The routed event associated with these event args.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The source object that raised the routed event.</dd><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The previous size (or bounds) of the object.</dd><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The new size (or bounds) of the object.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_SizeChangedEventArgs">SizeChangedEventArgs Class</a>  
<a href="Overload_Avalonia_Controls_SizeChangedEventArgs__ctor">SizeChangedEventArgs Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

