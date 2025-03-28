# Avalonia.Data.Converters Namespace






## Classes
<table>
<tr>
<td><a href="T_Avalonia_Data_Converters_BoolConverters">BoolConverters</a></td>
<td>Provides a set of useful <a href="T_Avalonia_Data_Converters_IValueConverter">IValueConverter</a>s for working with bool values.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_Converters_DefaultValueConverter">DefaultValueConverter</a></td>
<td>Provides a default set of value conversions for bindings that do not specify a value converter.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_Converters_FuncMultiValueConverter_2">FuncMultiValueConverter(TIn, TOut)</a></td>
<td>A general purpose <a href="T_Avalonia_Data_Converters_IValueConverter">IValueConverter</a> that uses a <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func(T, TResult)</a> to provide the converter logic.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_Converters_FuncValueConverter_2">FuncValueConverter(TIn, TOut)</a></td>
<td>A general purpose <a href="T_Avalonia_Data_Converters_IValueConverter">IValueConverter</a> that uses a <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func(T, TResult)</a> to provide the converter logic.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_Converters_FuncValueConverter_3">FuncValueConverter(TIn, TParam, TOut)</a></td>
<td>A general purpose <a href="T_Avalonia_Data_Converters_IValueConverter">IValueConverter</a> that uses a <a href="https://learn.microsoft.com/dotnet/api/system.func-3" target="_blank" rel="noopener noreferrer">Func(T1, T2, TResult)</a> to provide the converter logic.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_Converters_ObjectConverters">ObjectConverters</a></td>
<td>Provides a set of useful <a href="T_Avalonia_Data_Converters_IValueConverter">IValueConverter</a>s for working with objects.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_Converters_StringConverters">StringConverters</a></td>
<td>Provides a set of useful <a href="T_Avalonia_Data_Converters_IValueConverter">IValueConverter</a>s for working with string values.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_Converters_StringFormatMultiValueConverter">StringFormatMultiValueConverter</a></td>
<td>A multi-value converter which calls <a href="https://learn.microsoft.com/dotnet/api/system.string.format#system-string-format(system-string-system-object)" target="_blank" rel="noopener noreferrer">Format(String, Object)</a></td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_Converters_StringFormatValueConverter">StringFormatValueConverter</a></td>
<td>A value converter which calls <a href="https://learn.microsoft.com/dotnet/api/system.string.format#system-string-format(system-string-system-object)" target="_blank" rel="noopener noreferrer">Format(String, Object)</a></td>
</tr>
</table>

## Interfaces
<table>
<tr>
<td><a href="T_Avalonia_Data_Converters_IMultiValueConverter">IMultiValueConverter</a></td>
<td>Converts multi-binding inputs to a final value.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_Converters_IValueConverter">IValueConverter</a></td>
<td>Converts a binding value.</td>
</tr>
</table>
